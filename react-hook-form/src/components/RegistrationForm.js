import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch('password');
  const onSubmit = (data) => {
    // Process the form data and show success pop-up
    alert('Registration successful!');
  };

  return (
    <div class="signup">
      <h1> Sign Up</h1>
      <h3>update your details</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">Username</label>
          <input
            name="firstName"
            id="firstName"
            {...register('firstName', {
              required: 'username is a required field',
            })}
          />
          {errors.firstName && <span>username is a required field</span>}

          <label htmlFor="phone">Phonenumber</label>
          <input
            type="text"
            id="phone"
            name="phone"
            {...register('phone', {
              required: 'Phone number is required.',
              minLength: {
                value: 10,
                message: 'Phone number should be at least 10 characters long.',
              },
            })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', {
              required: 'Email is required.',
              pattern: { value: /^\S+@\S+$/i, message: 'email is not valid' },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register('password', {
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'password must be at least 6 characters',
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          {...register('confirmPassword', {
            required: 'Confirm Password is required.',
            validate: (value) =>
              value === watch('password') || 'Passwords do not match.',
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
