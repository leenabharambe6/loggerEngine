import React, { useState } from 'react';
import axios from 'axios';

const LogIngestionForm = () => {
    const [formData, setFormData] = useState({
        timestamp: '',
        level: '',
        commit: '',
        message: '',
        traceId: '',
        resourceId: '',
        spanId: '',
        metadata: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');
        console.log('formData ::: ', formData)
        try {
            formData.metadata = JSON.parse(formData.metadata);
            await axios.post('http://localhost:3000/logs', formData);
            setStatus('Log submitted successfully!');
            setFormData({
                timestamp: '',
                level: '',
                commit: '',
                message: '',
                traceId: '',
                resourceId: '',
                spanId: '',
                metadata: '',
            });
        } catch (error) {
            console.error('Error submitting log:', error);
            setStatus('Failed to submit log.');
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
            <h2>Log Ingestion Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Timestamp:
                    <input
                        type="datetime-local"
                        name="timestamp"
                        value={formData.timestamp}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Level:
                    <select name="level" value={formData.level} onChange={handleChange} required>
                        <option value="">Select level</option>
                        <option value="info">Info</option>
                        <option value="warn">Warning</option>
                        <option value="error">Error</option>
                        <option value="debug">debug</option>
                    </select>
                </label>
                <br />

                <label>
                    commit:
                    <input
                        type="text"
                        name="commit"
                        value={formData.commit}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    traceId:
                    <textarea
                        name="traceId"
                        value={formData.traceId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    ResourceId:
                    <textarea
                        name="resourceId"
                        value={formData.resourceId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    SpanId:
                    <textarea
                        name="spanId"
                        value={formData.spanId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    metadata:
                    <textarea
                        name="metadata"
                        value={formData.metadata}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />


                <button type="submit">Submit Log</button>
            </form>
            <p>{status}</p>
        </div>
    );
};

export default LogIngestionForm;
