'use client';
import { useState } from 'react';

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

interface ResultCheckerProps {
  title: string;
  examCode: string;
  fields: FormField[];
  officialUrl?: string;
  officialName?: string;
  smsFormat?: string;
  smsNumber?: string;
  isPublished?: boolean;
}

export default function ResultChecker({
  title,
  examCode,
  fields,
  officialUrl,
  officialName,
  smsFormat,
  smsNumber,
  isPublished = true
}: ResultCheckerProps) {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowResult(false);
    
    // Simulate network request and processing time
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="contact-form" style={{ marginTop: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '.5rem' }}>
        Check {title} Online
      </h2>
      
      {!isPublished && (
        <div className="alert alert-info" style={{ marginBottom: '1.5rem', background: '#fef9c3', borderColor: '#fef08a', color: '#854d0e' }}>
          <strong>Notice:</strong> The {title} has not been officially published yet. Check back later or follow our updates.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {fields.map((field) => (
            <div key={field.name} className="form-group">
              <label>{field.label}</label>
              <input 
                type={field.type || "text"} 
                required 
                placeholder={field.placeholder} 
                disabled={!isPublished || loading}
              />
            </div>
          ))}
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ width: '100%', background: '#1a56db', color: '#fff', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
          disabled={!isPublished || loading}
        >
          {loading ? (
            <><span className="loader-spinner"></span><span style={{ marginLeft: '10px' }}>Processing...</span></>
          ) : (
            `View Result`
          )}
        </button>
      </form>

      {showResult && (
        <div style={{ marginTop: '2rem', animation: 'fadeIn 0.5s' }}>
          <div className="alert alert-info" style={{ background: '#f0fdf4', borderColor: '#bbf7d0', color: '#166534' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '.5rem' }}>Processing Complete</h3>
            <p style={{ marginBottom: '1rem' }}>
              Due to privacy restrictions, we cannot display your exact grade sheet directly on our site. 
              However, your details have been formatted. Please use the official portal or SMS to securely view your full marksheet.
            </p>
            
            {officialUrl && (
              <div style={{ marginTop: '1.5rem' }}>
                <strong>🌐 Official Online Portal:</strong>
                <a 
                  href={officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline" 
                  style={{ display: 'inline-block', marginTop: '.5rem', border: '1px solid #166534', color: '#166534' }}
                >
                  Visit {officialName || 'Official Website'} →
                </a>
              </div>
            )}
            
            {smsFormat && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fff', borderRadius: '8px', border: '1px dashed #bbf7d0' }}>
                <strong>📱 Check via SMS (Fastest):</strong>
                <p style={{ marginTop: '.5rem' }}>
                  Open your message app and type: <br/>
                  <code style={{ background: '#f1f5f9', padding: '.2rem .4rem', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold' }}>{smsFormat}</code>
                  <br/>
                  Send it to: <strong>{smsNumber || '35001'}</strong>
                </p>
                <small style={{ color: '#64748b', display: 'block', marginTop: '.5rem' }}>*Standard SMS charges apply.</small>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
