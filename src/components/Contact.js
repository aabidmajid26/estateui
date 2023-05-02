import { useForm } from 'react-hook-form';

import '../styles/Contact.css';

export default function Contact() {
    const {register, handleSubmit} = useForm();
    return (
        <>
            <div className='form-group col-lg-3 col-sm-6 col-12' id="form" >
                <h3 id='form-title'>Hello! Please Fill Out This Form</h3>
                <form 
                    onSubmit={handleSubmit((data) => {
                        console.log(data, 'data');

                })}>
                    <div className="form-group col-12">
                        <label>Name: </label><input {...register("name")} className='form-control' type="text" name="name" placeholder="Enter your name" /><br/>
                    </div>
                    <div className="form-group col-12">
                        <label>Phone: </label><input {...register("phone")} className='form-control' type="phone" name="phone" placeholder="Enter your mobile number" /><br/>
                    </div>
                    <div className="form-group col-12">
                        <label>Email: </label><input {...register("email")} className='form-control' type="email" name="email" placeholder="Enter your email" /><br/>
                    </div>
                    <button className='btn-danger btn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}