import React, { useState } from 'react';
import axios from 'axios';
import './recommendationForm.css';
import DOMPurify from 'dompurify';

const RecommendationForm = () => {
    const [skills, setSkills] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 

    const generatePrompts = async (response) => {
        setLoading(true); 

        try {
            const responseFromAPI = await axios.post('http://localhost:3001/recommend/generate_prompts', { 
                response 
            });

            if (responseFromAPI.data.prompts && responseFromAPI.data.prompts.length > 0) {
                setPrompts(responseFromAPI.data.prompts); 
            } else {
                setError('No prompts received. Try again.');
            }
            setLoading(false); 
        } catch (err) {
            console.error('Error generating prompts:', err);
            setError('Failed to generate prompts. Please try again.');
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); 

        try {
            const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill);
            if (skillsArray.length === 0) {
                setError('Please enter at least one skill.');
                setLoading(false);
                return;
            }

            const response = await axios.post('http://localhost:3001/recommend/get_recommendations', {
                skills: skillsArray
            });
            setRecommendations(prev => [...prev, response.data.recommendations]);
            setSkills('');
            setLoading(false); 
        } catch (err) {
            console.error('Error fetching recommendations:', err);
            setError('Failed to fetch recommendations. Please try again.');
            setLoading(false); 
        }
    };

    const handleRefreshPrompts = () => {
        setSkills('');
    };

    const sanitizedHTML = DOMPurify.sanitize(recommendations);

    return (
        <div className="recommendation-form-container">
            <div className="recommendations-container">
                {recommendations.length > 0 ? (
                    recommendations.map((recommendation, index) => (
                        <div key={index} className="recommendation-item">
                        
                            <div
                                dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
                            />
                        </div>
                    ))
                ) : (
                    <p className="no-recommendations">No recommendations yet. Start by entering a prompt.</p>
                )}
            </div>

            <div className="fixed-input-container">
                {loading ? (
                    <p className="analyzing-text text-yellow-500">Analyzing...</p>
                ) : null}

                <form className="input-container d-flex" onSubmit={handleSubmit}>
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-10">
                        <div className="col-span-9">
                            <textarea
                                placeholder="Ask whatever you want...."
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="input-actions">
                                <button 
                                    type="submit" 
                                    className="submit-btn p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="spinner-border spinner-border-sm"></span>  
                                    ) : (
                                        '➔'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {error && <p className="error-text text-red-500">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default RecommendationForm;
