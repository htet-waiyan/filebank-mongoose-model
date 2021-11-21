const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
    archiveRetention: { type: Number, default: 30 }, // in days,
    recentUpTo: { type: Number, default: 0 }, // in days, 0 indicates recent will show today activity, e.g set 30 days to show up to 30 days
});

const Setting = mongoose.model('Setting', SettingSchema);

module.exports = Setting;
