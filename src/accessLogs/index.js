const mongoose = require('mongoose');

const AccessLogSchema = new mongoose.Schema({
    secret: { type: mongoose.Schema.Types.ObjectId, ref: 'Object' },
    openDate: Date,
    openTimestamp: Number,
});

const AccessLog = mongoose.model('AccessLog', AccessLogSchema);

module.exports = AccessLog;
