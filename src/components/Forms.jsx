import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
    username:yup.string().min(7).required(),
  email:yup.string(),
  password:yup.string().min(6).required()
})

// check validity
// schema
//   .isValid({
//     email: 'eric.cartman@southpark.com',
//   })
//   .then((valid) => {
//     console.log(valid); // true
//   });
// schema
//   .isValid({
//     email: 'not.a.valid.email',
//   })
//   .then((valid) => {
//     console.log(valid); // false
//   });
const Forms = () => {


    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: 'abc..',
            email: 'abc@example.com'
        }
    });
    console.log(errors);
    const onSubmit = (data) => {
        console.log(data)  
    }
    return (
        <>
 <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <DevTool control={control} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                {...register('username', //{
            //       required: 'Please enter your valid username',
            //       minLength: {
            //         value: 6,
            //         message: 'Username must be at least 6 characters',
            //       }, }
            )}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              {errors?.username && (
                <p className="text-red-500 mt-1">{errors.username.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                {...register('email', { required: 'Please enter your email address' })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                 {...register('password', {
                //   required: 'Please enter your password',
                //   minLength: {
                //     value: 7,
                //     message: 'Password must be at least 7 characters',
                //   },
                })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>
          </div>

          
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
          
                
                   

        </>
    )
}

export default Forms
