import { useForm } from 'react-hook-form';

import '../styles/Contact.css';

export default function Contact() {
    const {register, handleSubmit} = useForm();
    return (
        <>
            <div className='form-group col-md-12 col-lg-12 col-12' id="form" >
                <h3 id='form-title'>Find Your Perfect Workspace. </h3>
                <form 
                    onSubmit={handleSubmit((data) => {
                        console.log(data, 'data');

                })}>
                    <div className="form-group col-12">
                        <input {...register("name")} className='form-control' type="text" name="name" placeholder="Enter your name" /><br/>
                    </div>
                    <div className="form-group col-12">
                        <input {...register("phone")} className='form-control' type="phone" name="phone" placeholder="Enter your mobile number" /><br/>
                    </div>
                    <div className="form-group col-12">
                        <input {...register("email")} className='form-control' type="email" name="email" placeholder="Enter your email" /><br/>
                    </div>
                    <button className='btn-danger btn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}