const sub = 'free';

const canAccesscontent = sub === 'pro' || sub === 'vip';
console.log(`Есть доступ к контенту?`, canAccesscontent);