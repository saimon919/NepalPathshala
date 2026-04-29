'use client';
import { useState } from 'react';
import AdBanner from '@/components/AdBanner';

const gradePoints: Record<string, number> = {
  'A+': 4.0, 'A': 3.6, 'B+': 3.2, 'B': 2.8,
  'C+': 2.4, 'C': 2.0, 'D+': 1.6, 'NG': 0,
};

function marksToGrade(marks: number): string {
  if (marks >= 90) return 'A+';
  if (marks >= 80) return 'A';
  if (marks >= 70) return 'B+';
  if (marks >= 60) return 'B';
  if (marks >= 50) return 'C+';
  if (marks >= 40) return 'C';
  if (marks >= 35) return 'D+';
  return 'NG';
}

const SEE_SUBJECTS = ['Nepali', 'English', 'Mathematics', 'Science', 'Social Studies', 'HPE', 'Optional I', 'Optional II'];

// Bikram Sambat to AD conversion (approximate)
function bsToAd(year: number, month: number, day: number): string {
  const bsDays = [30,32,31,32,31,30,30,30,29,30,29,30];
  let totalDays = (year - 2000) * 365 + 136;
  for (let m = 1; m < month; m++) totalDays += bsDays[m - 1];
  totalDays += day;
  const adStart = new Date(1943, 3, 14);
  const adDate = new Date(adStart.getTime() + totalDays * 86400000);
  return adDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function ToolsPageClient() {
  const [marks, setMarks] = useState<string[]>(Array(8).fill(''));
  const [gpaResult, setGpaResult] = useState<{ gpa: string; grades: string[] } | null>(null);

  const [bsYear, setBsYear] = useState('');
  const [bsMonth, setBsMonth] = useState('');
  const [bsDay, setBsDay] = useState('');
  const [adResult, setAdResult] = useState('');

  const calcGpa = () => {
    const grades = marks.map((m) => marksToGrade(Number(m)));
    const points = grades.map((g) => gradePoints[g]);
    const avg = points.reduce((a, b) => a + b, 0) / points.length;
    setGpaResult({ gpa: avg.toFixed(2), grades });
  };

  const convertDate = () => {
    const y = parseInt(bsYear), m = parseInt(bsMonth), d = parseInt(bsDay);
    if (!y || !m || !d) return;
    setAdResult(bsToAd(y, m, d));
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Free Student Tools</h1>
          <p>GPA Calculator, BS to AD Date Converter and more — 100% free</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AdBanner slot="1020304050" format="horizontal" />
          <div style={{ height: '1.5rem' }} />

          {/* GPA Calculator */}
          <div className="tool-card">
            <h2>🧮 SEE/NEB GPA Calculator</h2>
            <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>
              Enter your marks (out of 100) in each subject to instantly calculate your GPA.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.2rem' }}>
              {SEE_SUBJECTS.map((subj, i) => (
                <div key={subj} className="form-group">
                  <label>{subj}</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="0–100"
                    value={marks[i]}
                    onChange={(e) => {
                      const updated = [...marks];
                      updated[i] = e.target.value;
                      setMarks(updated);
                    }}
                  />
                </div>
              ))}
            </div>
            <button className="btn btn-accent" onClick={calcGpa}>Calculate GPA</button>

            {gpaResult && (
              <div className="result-box" style={{ marginTop: '1.5rem' }}>
                <div className="result-value">{gpaResult.gpa}</div>
                <div className="result-label">Your GPA out of 4.0</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', justifyContent: 'center', marginTop: '1rem' }}>
                  {SEE_SUBJECTS.map((subj, i) => (
                    <span key={subj} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '.3rem .7rem', fontSize: '.82rem', fontWeight: 600 }}>
                      {subj}: {gpaResult.grades[i]}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <AdBanner slot="2030405060" format="rectangle" />

          {/* BS to AD Converter */}
          <div className="tool-card" style={{ marginTop: '1.5rem' }}>
            <h2>📅 BS to AD Date Converter</h2>
            <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>
              Convert Bikram Sambat (BS) dates to Anno Domini (AD) dates used internationally.
            </p>
            <div className="form-row">
              <div className="form-group">
                <label>BS Year (e.g. 2081)</label>
                <input type="number" placeholder="2081" value={bsYear} onChange={(e) => setBsYear(e.target.value)} />
              </div>
              <div className="form-group">
                <label>BS Month (1–12)</label>
                <select value={bsMonth} onChange={(e) => setBsMonth(e.target.value)}>
                  <option value="">Select Month</option>
                  {['Baisakh','Jestha','Ashadh','Shrawan','Bhadra','Ashwin','Kartik','Mangsir','Poush','Magh','Falgun','Chaitra'].map((m, i) => (
                    <option key={m} value={i + 1}>{m} ({i + 1})</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>BS Day</label>
                <input type="number" min="1" max="32" placeholder="1–32" value={bsDay} onChange={(e) => setBsDay(e.target.value)} />
              </div>
            </div>
            <button className="btn btn-accent" onClick={convertDate}>Convert to AD</button>
            {adResult && (
              <div className="result-box" style={{ marginTop: '1.5rem' }}>
                <div className="result-value" style={{ fontSize: '1.4rem' }}>{adResult}</div>
                <div className="result-label">Equivalent AD Date</div>
              </div>
            )}
          </div>

          {/* AD to BS */}
          <div className="tool-card" style={{ marginTop: '1.5rem' }}>
            <h2>🗓️ More Tools Coming Soon</h2>
            <p>We are working on more free tools for Nepali students:</p>
            <ul>
              <li>AD to BS Date Converter</li>
              <li>Percentage to GPA Converter</li>
              <li>Entrance Exam Score Calculator</li>
              <li>Scholarship Eligibility Checker</li>
            </ul>
          </div>

          <AdBanner slot="3040506070" format="horizontal" style={{ marginTop: '2rem' }} />
        </div>
      </section>
    </>
  );
}
