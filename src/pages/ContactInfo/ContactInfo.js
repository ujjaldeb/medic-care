import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="medica-contact-info-area">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="single-contact-info d-flex align-items-center">
                            <div className="contact-icon me-3">
                                <img src="data:image/webp;base64,UklGRgACAABXRUJQVlA4TPMBAAAvHEAHEM/EoG0bQYb/tK+LHsO8TD+Ctm2burPtity2bZDbaulv4H0DAJQ+PsICQgAYDAAAJp4IDjNRGFjAQkQIYdCZsBj0XOUB/j6Y6yqCUJPlCbq3TNnDIoQwADhAmLkS86eKBUiUJNm0rb62bd9n27i2bdt6fte263v32vvsT4jo/wRI2f3be2OP5OHn+cO1tjjpA8YSKf51cU1VwbNIqR/rdW4iTD+82wM189gOtHNen/f8F6f9zEnSOMD63NDw4i5AuSSts0e2pLJjzhrTZfW/NwAbnyR955YIqQWGw+UwbRkKpFes8FElUCIPe+ClRnjPZhGUy5yfbFI3u5WgBWBM5igufUz6D1RLQ9wE22Rw62+TDNWSemmQbRInfjYao1CKhgh37nDopQ/8kCNfO+8LUlRHo6MjOVzkrQYocJDGVVdnV3OMoYcCjfLVQSzGYkMHxeqjwIE+19bW1FWEGfr5plrqnThf4qXes+KS7yVxioAwd+6zI2mBWnemaJB0n0s/N9IgRpJ+M+TGKh2yJuxR4tkUf3wNaoJSTybgg4wvD4CxSCdZK8BGquUxNLwDWrO8LAEPBmH/+SwXydITmJTSZ4CdhZHR5ROgO1QBPzmNewrTsj7qOcO41ZgpSYH/uFq9nZFtUM6br19epHvJHPIXAA=="
                                    alt="" />
                            </div>
                            <div className="contact-meta">
                                <p>Monday - Friday 08:00 - 21:00 <br /> Saturday and Sunday - CLOSED</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="single-contact-info d-flex align-items-center">
                            <div className="contact-icon me-3">
                                <img src="data:image/webp;base64,UklGRnYBAABXRUJQVlA4TGkBAAAvHUAGEI+DoG3bGP5ob/k5zMv0K2zbts1VckZbAUlyIOwGzgyAAACIRkMIEADQAECAQNwFPBqIC1AQQIgPAAJwIURBNIAIJhsaQAgwCIQQC6LlDI9CDt5DEOQ4nYCvBCEAdFvbjkX32J7JNbZt27byl+s6/5/p7Qwi+j8BW3/+oPn/FypsMeX2mHYdZWN0yPwSMXoqsEyEoQoc4Ce3YKphn7gfuO0y0v8L4QibUbLTBjbg+jQTo6HlHo6by3A8w65msfBIyxAaKWke4mPSHhZOSb4v2Kop0nkJJ22StoqoYTvLm6/ARIrAjPJLkHaAFanpEBhQWXY/n3A15YcfHurKaU1xVj0O8GmrT3BXzjvftZLtkb0GyQE7pV2QbVd+t/JHYa6IW1oDr0pfhEFpGwunxmFS5R5Dn3axqGmHdZX/TEgzWAx/cS6DjRG2VwkCrzLaC8T88FFlRq40UcC6eTV7ATxZVg7TSesPAA=="
                                    alt="" />
                            </div>
                            <div className="contact-meta">
                                <p>0080 673 729 766 | 0080 234 5678 900 <br /> contact@business.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="single-contact-info d-flex align-items-center">
                            <div className="contact-icon me-3">
                                <img src="data:image/webp;base64,UklGRugBAABXRUJQVlA4TNsBAAAvG8AIEI+EoG3bGP5pv92GYV6mH0Hbto09ybYrctu2QU6jg/4G3luwC0I4PkAQQABhPwDtMBCgShDCAYAADgGIABYBCPGLLRcLEMAscYiBJsC3R1BODSMTGrJYjpSdj5caa+AAJEqSbNpWX+v52rZt27Zt2773+b365rP2PvsTIvo/AbKOrZ3cv3u63Bwo+yh3s2ax+aMjzJZ3P8D5Qk/n4MYz8KvCRsgF/O9KlNEvfw0YtQh+h/lI2c17hnmDxxW0ys2ve9DtMgKtctvjBHKkVNiQg5//8yxt8i/I5Nd8cLVaYlIFVERAr4zBV7hOmfTIcSNEmI5ga+gRGkyt/FnnWMY06JOCjvnpZUji7yVDpkb++0gqhmiD1z9eaDPV8v+LpEqIMOiB77SY4mDRV/H3PMl8yROdJs3B/Q5QbPHGGeMWnku4NsscAMvcWUhF4ys9KbJM5281ZFu5OcjvwD/sOOPzh1X1QrIjPZCpb3DlRDhsSWqAOgcOIFqSbiDGrXpol2sCXLuTAncyN8GUvYA3iLbQNtTb2oUqWfu/Qa6NIRiT3UQg0aIODmW/EH6GGkrh5YMbqoHbT5LygCi53Qmn/soCMuTgMKzlAgVydBrXUjk8A5TL8YnXctkGAA=="
                                    alt="" />
                            </div>
                            <div className="contact-meta">
                                <p>Lamas Carbajal Str, no 14-18 <br /> 41770 Montellano</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;