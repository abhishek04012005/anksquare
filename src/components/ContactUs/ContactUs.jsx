import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { TextField, Button, Box } from '@mui/material';
import './ContactUs.css';
import Container from '../../Container/Container';
import MainHeading from '../Headings/MainHeading/MainHeading';
import ContactUsSVG from '../../assets/SVG/ContactUsSVG/ContactUsSVG';

const ContactUs = () => {


    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        number: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        const scriptURL = "https://script.google.com/macros/s/AKfycbxDLHK97ZlT1F8SRet-dh00V90oQRuxdEYRA1OJtX5wYmkrs8UKDso_Fi8xQBLFMQyYdw/exec";

        const formDataToSend = new URLSearchParams();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                alert("Thank You!");
                setFormData({ name: '', email: '', message: '', number: '' });
            } else {
                alert("There was an error submitting the form.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("There was an error submitting the form.");
        } finally {
            setLoading(false); // End loading
        }
    };


    return (
        <div className="contact-me" id='contact'>
            <Container>

                <MainHeading title='Contact Me' />
                <Grid container
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={{ xs: 5, md: 3, lg: 20 }}
                >
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ maxWidth: '100%', mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}
                        >
                            <TextField
                                className="custom-text-field"
                                label="Name"
                                name="name"
                                variant="outlined"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Mobile Number"
                                name="number"
                                type="tel"
                                variant="outlined"
                                value={formData.number}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Message"
                                name="message"
                                variant="outlined"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={8}
                                fullWidth
                                required
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: 'var(--Green)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'var(--Green)'
                                    }
                                }}
                                fullWidth
                            >
                                {loading ? "Sending..." : "Send"}
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div>
                            <ContactUsSVG/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default ContactUs;
