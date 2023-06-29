import React, { useState } from 'react';
import { useForm , Controller} from 'react-hook-form';
import { Typography,TextField, Button, Select, MenuItem, FormControl, InputLabel,RadioGroup,FormControlLabel,Radio,FormLabel  } from '@mui/material';
import Container from '@mui/material/Container';
import { DevTool } from '@hookform/devtools';
const SignUpForm = () => {
    const { register, handleSubmit ,control, formState: { errors } } =useForm({
      defaultValues:{
        name: 'name',
        email: 'email',
        age: 20,

      }
    })
console.log(errors)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
    occupation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const onSubmit = (data) => {
console.log('data is'+data);
}
  return (
    <div>
         <Container maxWidth="xs">
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
        <TextField
          {...register('name',{required : true})}
          label="Name"
          // name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
           {...register('email',{required : true})}
          label="Email"
          // name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
        {...register('age',{required : true})}
          label="Age"
          // name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
        {...register('password',{required : true})}
          label="Password"
          // name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
        {...register('confirmPassword',{required : true})}
          label="Confirm Password"
          // name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        {/* <FormControl component="fieldset" margin="normal" fullWidth required>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="male"
              control={<Radio {...register('male')}/>}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio {...register('female')}/>}
              label="Female"
            />
            <FormControlLabel
              value="others"
              control={<Radio {...register('others')}/>}
              label="Others"
            />
          </RadioGroup>
        </FormControl> */}
        <FormControl variant="outlined" margin="normal" fullWidth required>
          <InputLabel id="occupation-label">Occupation</InputLabel>
          {/* <Controller
            render={(props)=> {
              <Select value={props.value} onChange={props.onChange}
              labelId="occupation-label"
              id="occupation"
              name="occupation"
              // value={formData.occupation}
              // onChange={handleChange}
              label="Occupation"
            >
           <MenuItem   value="fullstack">Fullstack Engineer</MenuItem>
            <MenuItem  value="backend">Backend Engineer</MenuItem>
            <MenuItem value="frontend">Frontend Engineer</MenuItem>
            <MenuItem  value="database">Database Administrator</MenuItem>
          </Select>
            }}
            name='occupation'
            control={control}
            defaultValue=''
            /> */}
          {/* <Select
            labelId="occupation-label"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            label="Occupation"
          >
            <MenuItem   value="fullstack">Fullstack Engineer</MenuItem>
            <MenuItem  value="backend">Backend Engineer</MenuItem>
            <MenuItem value="frontend">Frontend Engineer</MenuItem>
            <MenuItem  value="database">Database Administrator</MenuItem>
          </Select> */}
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default SignUpForm;
