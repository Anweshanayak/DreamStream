import React, { useState } from 'react';
import Navbar from './HR/NavBar';

function OfferLetterGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    offerType: 'Employment Offer',
    email: '',
    volunteerName: '',
    volunteerEmail: '',
    project: '',
    startDate: '',
    endDate: '',
    workingHours: '',
    projectManagement: '',
    additionalInformation: '',
  });

  const templates = {
    employment: `
      Volunteer Name: ${formData.volunteerName}
      Volunteer Email: ${formData.volunteerEmail}
      Project: ${formData.project}
      Start Date: ${formData.startDate}
      End Date: ${formData.endDate}
      Working Hours: ${formData.workingHours}
      Project Management: ${formData.projectManagement}
      Additional Information: ${formData.additionalInformation}

      Dear ${formData.volunteerName},

      We are thrilled to extend an offer for you to join us as a volunteer for the project ${formData.project}. Your contribution will be invaluable to our team.

      Project Details:

      - Start Date: ${formData.startDate}
      - End Date: ${formData.endDate}
      - Working Hours: ${formData.workingHours}
      - Project Management: ${formData.projectManagement}
      - Additional Information: ${formData.additionalInformation}

      We look forward to working with you. Please let us know if you have any questions or need further clarification.

      Best Regards,
      [Your Organization]
    `,
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    // Email sending logic (use EmailJS or similar)
    alert(`Offer letter sent to ${formData.email}`);
  };

  return (
    <>
    <Navbar/>
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      {/* Left Section - Form */}
      <div style={{ flex: 1, borderRight: '1px solid #ddd', paddingRight: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Offer Letter Generator</h2>

        {/* Progress Stepper */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: step >= 1 ? '#00b894' : '#ddd',
              color: step >= 1 ? 'white' : '#333',
            }}
          >
            1
          </div>
          <div
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: step >= 2 ? '#00b894' : '#ddd',
              color: step >= 2 ? 'white' : '#333',
            }}
          >
            2
          </div>
          <div
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: step >= 3 ? '#00b894' : '#ddd',
              color: step >= 3 ? 'white' : '#333',
            }}
          >
            3
          </div>
        </div>

        <div>
          {step === 1 && (
            <>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Offer Type:
                <select
                  name="offerType"
                  value={formData.offerType}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                >
                  <option value="Employment Offer">Employment Offer</option>
                  <option value="Promotion">Promotion</option>
                  <option value="Part-time">Part-Time</option>
                </select>
              </label>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
            </>
          )}
          {step === 2 && (
            <>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Volunteer Name:
                <input
                  type="text"
                  name="volunteerName"
                  value={formData.volunteerName}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Volunteer Email:
                <input
                  type="email"
                  name="volunteerEmail"
                  value={formData.volunteerEmail}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Project:
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
            </>
          )}
          {step === 3 && (
            <>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                End Date:
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Working Hours:
                <input
                  type="text"
                  name="workingHours"
                  value={formData.workingHours}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Project Management:
                <input
                  type="text"
                  name="projectManagement"
                  value={formData.projectManagement}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Additional Information:
                <textarea
                  name="additionalInformation"
                  value={formData.additionalInformation}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </label>
            </>
          )}
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={handleBack}
            style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', backgroundColor: '#b2bec3', color: 'white', cursor: 'pointer', marginRight: '0.5rem' }}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', backgroundColor: '#00b894', color: 'white', cursor: 'pointer' }}
            disabled={step === 3}
          >
            Next
          </button>
          {step === 3 && (
            <button
              onClick={handleSendEmail}
              style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', backgroundColor: '#00b894', color: 'white', cursor: 'pointer' }}
            >
              Send Offer Letter
            </button>
          )}
        </div>
      </div>

      {/* Right Section - Preview */}
      <div style={{ flex: 2, padding: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Offer Letter</h2>
        <pre
          style={{
            background: '#f9f9f9',
            padding: '1rem',
            borderRadius: '5px',
            border: '1px solid #ddd',
            whiteSpace: 'pre-wrap',
          }}
        >
          {templates.employment}
        </pre>
      </div>
    </div>
    </>
  );
}

export default OfferLetterGenerator;