import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSchemaValidation } from '../Validations/UserValidations';
import { register } from '../Features/UserSlice';
import './Register.css'; // Import the CSS file for styling
import h1 from "../Images/h1.jpeg"

const Register = () => {
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        phoneNumer: data.phoneNumer,
        password: data.password,
      };

      console.log('Form Data', data);
      alert('Validation all good.');
      dispatch(register(userData));
      navigate('/login');
    } catch (error) {
      console.log('Error.');
    }
  };

  return (
    <Container fluid className="register-container">
      <Row className="justify-content-center">
        <Col md={6} className="register-image-col">
          {/* Add your image here */}
          <img src={h1} alt="Cruise" className="register-image" />
        </Col>
        <Col md={6} className="register-form-col">
          <h2 className="text-center mb-4">Register</h2>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name..."
                {...register('name', {
                  onChange: (e) => setName(e.target.value),
                })}
              />
              <p className="error">{errors.name?.message}</p>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Enter your email..."
                {...register('email', {
                  onChange: (e) => setEmail(e.target.value),
                })}
              />
              <p className="error">{errors.email?.message}</p>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number..."
                {...register('phone', {
                  onChange: (e) => setPhone(e.target.value),
                })}
              />
              <p className="error">{errors.phone?.message}</p>
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password..."
                {...register('password', {
                  onChange: (e) => setPassword(e.target.value),
                })}
              />
              <p className="error">{errors.password?.message}</p>
            </div>

            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm your password..."
                {...register('confirmPassword', {
                  onChange: (e) => setConfirmPassword(e.target.value),
                })}
              />
              <p className="error">{errors.confirmPassword?.message}</p>
            </div>

            <Button color="primary" className="register-button" block>
              Register
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
