import { useState } from 'react';
import Editor from "react-simple-code-editor";
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const Review = () => {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`);
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const handleSubmit = async () => {
    if (!code.trim()) {
      setReview('<div class="alert alert-warning">Please enter some code to review.</div>');
      return;
    }

    setIsLoading(true);
    setReview('<div class="alert alert-info">Analyzing your code...</div>');

    try {
      const response = await fetch(`${API_BASE}/ai/get-review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch review");
      }

      const data = await response.json();

      setReview(`
        <div class="alert alert-success">Code review complete!</div>
        <div class="review-feedback">
          <h5>Suggestions:</h5>
          <p>${data.review.replace(/\n/g, "<br/>")}</p>
        </div>
      `);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview('<div class="alert alert-danger">Error: Could not fetch review.</div>');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="review" className="section-padding bg-gradient">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Get Review</h2>
          <div className="underline"></div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="code-container">
              <h3>Your Code</h3>
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={code => highlight(code, languages.javascript, 'javascript')}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '5px',
                  minHeight: '300px'
                }}
              />
              <button 
                id="submit-code" 
                className="btn btn-primary btn-glow mt-3"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Analyzing...' : 'Submit Code'}
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="review-container">
              <h3>Review</h3>
              <div 
                id="review-output" 
                className="p-3"
                dangerouslySetInnerHTML={{ __html: review }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
