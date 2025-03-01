const schedule = require('node-schedule');
const alarms = []; // In production, use a database for persistence

exports.setAlarm = (req, res) => {
  const { time, label } = req.body;
  const alarmTime = new Date(time);
  if (isNaN(alarmTime)) {
    return res.status(400).json({ message: 'Invalid time format' });
  }
  // Schedule the alarm with node-schedule
  const job = schedule.scheduleJob(alarmTime, function() {
    console.log(\`Alarm triggered: \${label}\`);
    // TODO: Implement notification (SMS, push, or TTS) upon alarm trigger
  });
  const alarm = { time: alarmTime, label, jobId: job.name || job.id };
  alarms.push(alarm);
  res.json({ message: 'Alarm set successfully', alarm });
};

exports.getAlarms = (req, res) => {
  res.json({ alarms });
};
