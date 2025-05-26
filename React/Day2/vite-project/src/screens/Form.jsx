import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../styles/form.css';
const validationSchema = yup.object({
    username : yup
        .string('Enter your username')
        .required('Username is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const WithMaterialUI = ({data,setData, setIsForm}) => {
    const formik = useFormik({
        initialValues: {
            username : '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setData([...data, values]);
            formik.resetForm();
            setIsForm(true);
        },
    });

    return (
        <div className='shadow'>
            <form onSubmit={formik.handleSubmit} style={{gap: '20px', display: 'flex', flexDirection: 'column', width: '300px', color: 'black', padding: '5dvw'}}>
                <h2 style={{fontSize: '40px'}}>Form</h2>
                <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="username"
                    placeholder='Enter your Username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    placeholder='Enter your email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default WithMaterialUI;
