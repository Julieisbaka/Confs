import React from 'react';

const Settings: React.FC = () => {
    return (
        <div className="settings-page">
            <h1>Application Settings</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="theme">Theme</label>
                    <select id="theme" name="theme">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="notifications">Notifications</label>
                    <input type="checkbox" id="notifications" name="notifications" />
                </div>
                <div className="form-group">
                    <label htmlFor="language">Language</label>
                    <select id="language" name="language">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>
                </div>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;