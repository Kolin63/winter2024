const solsticeCountdown = document.getElementById('solstice-countdown');
const christmasCountdown = document.getElementById('christmas-countdown');
const newyearCountdown = document.getElementById('newyear-countdown');
const hytaleCountdown = document.getElementById('hytale-countdown');

function updateCountdowns()
{
    const now = new Date();

    const christmas = new Date();
    christmas.setFullYear(now.getFullYear(), 11, 25);
    christmas.setHours(0);
    christmas.setMinutes(0);
    christmas.setSeconds(0);
    christmas.setMilliseconds(0);
    christmasCountdown.textContent = getCountdownText(christmas);

    const solstice = new Date();
    solstice.setHours(0);
    solstice.setMinutes(0);
    solstice.setFullYear(now.getFullYear(), 11, 21);
    solstice.setSeconds(0);
    solstice.setMilliseconds(0);
    solsticeCountdown.textContent = getCountdownText(solstice);

    const newyear = new Date();
    newyear.setHours(0);
    newyear.setMinutes(0);
    newyear.setFullYear(now.getFullYear(), 12, 1);
    newyear.setSeconds(0);
    newyear.setMilliseconds(0);
    newyearCountdown.textContent = getCountdownText(newyear);

    const hytale = new Date();
    hytale.setHours(0);
    hytale.setMinutes(0);
    hytale.setFullYear(99999, 1, 2);
    hytale.setSeconds(0);
    hytale.setMilliseconds(0);
    hytaleCountdown.textContent = getCountdownText(hytale);
}
setInterval(updateCountdowns, 1);

function getCountdownText(goal)
{
    const now = new Date();

    const diff = goal.getTime() - now.getTime();

    if (diff < 0) return "000:00:00:00.000";

    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    let remainingMS = diff % (24 * 60 * 60 * 1000)

    const hours = Math.floor(remainingMS / (60 * 60 * 1000));
    remainingMS = remainingMS % (60 * 60 * 1000)

    const minutes = Math.floor(remainingMS / (60 * 1000));
    remainingMS = remainingMS % (60 * 1000)

    const seconds = Math.floor(remainingMS / 1000);
    remainingMS = remainingMS % 1000

    let s = days + ":" + hours + ":" + minutes + ":" + seconds + "." + remainingMS;
    
    if (days < 10)  s = insert(s, 0, '0');
    if (days < 100) s = insert(s, 0, '0');
    if (hours < 10) s = insert(s, 4, '0');
    if (minutes < 10) s = insert(s, 7, '0');
    if (seconds < 10) s = insert(s, 10, '0');
    if (remainingMS < 10) s = insert(s, 13, '0');
    if (remainingMS < 100) s = insert(s, 13, '0');

    return s;
}

function insert(string, index, insert)
{
    return string.slice(0, index) + insert + string.slice(index);
}