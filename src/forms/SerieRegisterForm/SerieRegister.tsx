import {
  Form, FormGroup, Label, Input, Row, Col, Button,
} from 'reactstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {
  AllInputs, Checks, Select, Options,
} from '../../schemas/inputs';
import { CartazSchema, SerieSchema } from '../../schemas/serie';
import { seriesList } from '../../helpers/helpers';
import { SerieRegisterSlice } from './SerieRegister.slice';
import { RootState } from '../../store';

const SerieRegisterForm = () => {
  const dispatch = useDispatch();
  const getState = useSelector((state: RootState) => state.SerieRegisterReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm();

  const handleImg = (e: any) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) reader.readAsDataURL(file);

    reader.onload = () => {
      const finalimg: CartazSchema = {
        base64: reader.result,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.name,
        size: file.size,
        type: file.type,
      };
      setValue('cartaz', finalimg);
    };
  };

  const onSubmit: SubmitHandler<SerieSchema> = (data: SerieSchema, e) => {
    const index = seriesList.findIndex((serie: SerieSchema) => (
      serie.titulo === data.titulo
    ));

    if (index > -1) {
      window.alert('Esta série já está cadastrada');
    } else {
      dispatch(SerieRegisterSlice.actions.addSerie(data));
    }
    e?.target.reset();
  };

  useEffect(() => {
    if (getState.error === null && getState.register === true) {
      window.alert('Série cadastrada!');
    }
    if (getState.error !== null) {
      setError('temporada', { message: 'Este número não é valido' }, { shouldFocus: true });
    }
  }, [getState, setError]);

  return (
    <section className="d-flex justify-content-center p-3">
      <Form
        className="col-xl-3 col-lg-4 col-md-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>CADASTRO DE SÉRIE</h1>
        {AllInputs.map(({
          type, id, label, key, required, message,
        }) => (
          <FormGroup key={`${key}-form-key`}>
            <Label for={id} key={`${key}-key`}>
              {label}
            </Label>
            <Input
              type={type}
              id={id}
              key={key}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register(id, { required })}
            />
            {errors[id] && (
            <span className="error-msg">
              { message }
            </span>
            )}
          </FormGroup>
        ))}

        <FormGroup
          inline
          check
          className="d-flex justify-content-around"
        >
          {Checks.map(({
            type, key, id, value, label, required,
          }) => (
            <Label check key={key}>
              <Input
                type={type}
                id={id}
                value={value}
                key={key}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register(id, { required })}
              />
              {label}
              {errors[id] && (
              <span className="error-msg">
                Este campo é obrigatório
              </span>
              )}
            </Label>
          ))}
        </FormGroup>

        <FormGroup className="pt-2">
          <Label>Data de estréia</Label>
          <Row form>
            {Select.map(({
              id, type, key, options, required,
            }) => (
              <Col key={id}>
                <FormGroup className="pr-2">
                  <Input
                    type={type}
                    id={id}
                    key={key}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register(id, { required })}
                  >
                    {options && options.map((option: Options) => (
                      <option
                        value={option}
                        key={option}
                      >
                        {option}
                      </option>
                    ))}
                  </Input>
                  {errors[id] && (
                  <span className="error-msg">
                    Este campo é obrigatório
                  </span>
                  )}
                </FormGroup>
              </Col>
            ))}
          </Row>
        </FormGroup>

        <FormGroup>
          <Label>Cartaz</Label>
          <Input
            type="file"
            id="cartaz-serie"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('cartaz', { required: true })}
            onChange={(e) => handleImg(e)}
          />
          {errors.cartaz && (
          <span className="error-msg">
            Este campo é obrigatório
          </span>
          )}
        </FormGroup>

        <Button type="submit" onClick={() => onSubmit}>
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default SerieRegisterForm;
