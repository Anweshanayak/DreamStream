import React, { useState } from 'react';

function OfferLetterGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    offerType: 'Employment Offer',
    companyName: '',
    companyAddress: '',
    companyWebsite: '',
    employeeName: '',
    employeeAddress: '',
    designation: '',
    email: '',
    salary: '',
    joiningDate: '',
  });

  const templates = {
    employment: `
      Company Name: [${formData.companyName}]
    Website: [${formData.companyWebsite}]
    Address: [${formData.companyAddress}]
    Employee Name: [${formData.employeeName}]
    Designation: [${formData.designation}]
    Joining Date: [${formData.joiningDate}]

    Dear [${formData.employeeName}],

    We are thrilled to extend an offer of employment to you at [${formData.companyName}] for the position of [${formData.designation}]. Your performance during the interview process has impressed us, and we believe you will be a valuable addition to our team.

    Your Compensation Package:

    Your Total Compensation (CTC) for the year will be Rs. [${formData.salary}]. This includes a Fixed Salary Component of Rs. [${formData.salaryFixed}] per annum and a Variable Component of Rs. [${formData.salaryVariable}] per annum (Performance-Based).

    In addition, you may be eligible for benefits such as Mobile, Internet, and Local Conveyance, as per company policy, depending on your role and nature of work.

    We look forward to welcoming you to our team. Please let us know if you have any questions or need further clarification.

    Best Regards,
    [${formData.companyName}]
    `,
    // Additional templates for other offer types can be added here
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
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
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      {/* Left Section - Form */}
      <div style={{ flex: 1, borderRight: '1px solid #ddd', paddingRight: '2rem' }}>
        <h2>Offer Letter Generator</h2>
        <div>
          {step === 1 && (
            <>
              <label>
                Offer Type:
                <select name="offerType" value={formData.offerType} onChange={handleChange}>
                  <option value="Employment Offer">Employment Offer</option>
                  <option value="Promotion">Promotion</option>
                  <option value="Part-time">Part-Time</option>
                </select>
              </label>
              <label>
                Company Name:
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
              </label>
              <label>
                Company Address:
                <input type="text" name="companyAddress" value={formData.companyAddress} onChange={handleChange} />
              </label>
              <label>
                Company Website:
                <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} />
              </label>
            </>
          )}
          {step === 2 && (
            <>
              <label>
                Employee Name:
                <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} />
              </label>
              <label>
                Employee Address:
                <input type="text" name="employeeAddress" value={formData.employeeAddress} onChange={handleChange} />
              </label>
              <label>
                Designation:
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
              </label>
            </>
          )}
          {step === 3 && (
            <>
              <label>
                Salary:
                <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
              </label>
              <label>
                Joining Date:
                <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} />
              </label>
            </>
          )}
          {step === 4 && (
            <>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
            </>
          )}
        </div>
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleBack} disabled={step === 1}>
            Back
          </button>
          <button onClick={handleNext} disabled={step === 4}>
            Next
          </button>
          {step === 4 && <button onClick={handleSendEmail}>Send Offer Letter</button>}
        </div>
      </div>

      {/* Right Section - Preview */}
      <div style={{ flex: 2, padding: '2rem' }}>
        <h2>Offer Letter</h2>
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
  );
}

export default OfferLetterGenerator;
