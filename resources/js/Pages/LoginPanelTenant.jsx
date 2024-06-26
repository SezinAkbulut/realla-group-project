import React, { useState } from 'react';
import Button from '../Components/RegisterButton';
import RegisterTextInput from '../Components/RegisterTextInput';
import RegisterCheckbox from '../Components/RegisterCheckbox';
import { Link, usePage } from '@inertiajs/react'; // Updated import

const LoginPanelTenant = () => {
    // Define state variables to store form input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { post } = usePage(); // Destructure post from usePage hook

    // Function to handle tenant login
    const handleTenantLogin = async () => {
        try {
            const response = await post('/api/login', {
                email,
                password
            });

            if (response.ok) {
                // Redirect to tenant dashboard upon successful login
                window.location.href = '/dashboard-tenant';
            } else {
                // Handle login failure
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Call handleTenantLogin to perform login
        await handleTenantLogin();
    };

    // Function to handle click on the "Forgot Password?" link
    const handleForgotPasswordClick = () => {
        // Redirect to the forgot password page
        window.location.href = '/forgot-password';
    };

    return (
        <div className="flex bg-gray-900 text-white p-8 justify-between" style={{ backgroundColor: '#292F36' }}>
            <div className="relative w-2/3 ml-52" style={{ marginTop: '-4rem' }}>
                <div style={{ position: 'relative', width: '500px', height: '725px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}>
                </div>
                <div className="absolute inset-0 flex justify-start items-center" style={{ marginLeft: '-2rem' }}>
                    <img src="/images/LoginPanelTenantImage.png" alt="LoginOptions" className="object-cover w-auto h-4/5"/>
                </div>
            </div>
            <div className="w-4/5 max-w-md ml-auto mr-20 mt-24 mb-20">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 mr-44">Welcome Back to REALLA!</h2>
                    <p>Sign in to your tenant account</p>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <RegisterTextInput
                            label="Your Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <RegisterTextInput
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex items-center justify-between mb-4">
                            <RegisterCheckbox
                                label="Remember Me"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            {/* Use onClick event to handle click on "Forgot Password?" link */}
                            <button type="button" className="text-white -mt-4" onClick={handleForgotPasswordClick}>Forgot Password?</button>
                        </div>
                        <Button type="submit">Login</Button>
                    </form>
                    <p className="mt-4">Don’t have an account? <Link href="/Auth/Register" className="text-yellow-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPanelTenant;
