/**
 * @description 日期格式化工具函数
 * @param {Date|string|number} date 日期对象、日期字符串或时间戳
 * @param {string} [format='YYYY-MM-DD'] 格式化模板
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  if (!date) return '';

  const d = new Date(date);
  if (isNaN(d.getTime())) return '';

  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const formatMap = {
    YYYY: year,
    MM: padZero(month),
    DD: padZero(day),
    HH: padZero(hours),
    mm: padZero(minutes),
    ss: padZero(seconds),
    M: month,
    D: day,
    H: hours,
    m: minutes,
    s: seconds
  };

  return format.replace(/(YYYY|MM|DD|HH|mm|ss|M|D|H|m|s)/g, match => {
    return formatMap[match];
  });
}

/**
 * @description 数字补零
 * @param {number} num 需要补零的数字
 * @returns {string} 补零后的字符串
 */
function padZero(num) {
  return String(num).padStart(2, '0');
}

/**
 * @description 获取相对时间描述
 * @param {Date|string|number} date 日期对象、日期字符串或时间戳
 * @returns {string} 相对时间描述
 */
export function getRelativeTime(date) {
  if (!date) return '';

  const d = new Date(date);
  if (isNaN(d.getTime())) return '';

  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return '刚刚';
  if (diffMinutes < 60) return `${diffMinutes}分钟前`;
  if (diffHours < 24) return `${diffHours}小时前`;
  if (diffDays < 30) return `${diffDays}天前`;

  return formatDate(date);
}

/**
 * @description 获取日期范围
 * @param {string} type 范围类型：today|week|month|year
 * @returns {[Date, Date]} 开始日期和结束日期
 */
export function getDateRange(type) {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);

  switch (type) {
    case 'today':
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
      break;
    case 'week':
      // eslint-disable-next-line no-case-declarations
      const day = now.getDay() || 7;
      start.setDate(now.getDate() - day + 1);
      start.setHours(0, 0, 0, 0);
      end.setDate(now.getDate() + (7 - day));
      end.setHours(23, 59, 59, 999);
      break;
    case 'month':
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
      end.setMonth(now.getMonth() + 1, 0);
      end.setHours(23, 59, 59, 999);
      break;
    case 'year':
      start.setMonth(0, 1);
      start.setHours(0, 0, 0, 0);
      end.setMonth(11, 31);
      end.setHours(23, 59, 59, 999);
      break;
  }

  return [start, end];
}

export default {
  formatDate,
  getRelativeTime,
  getDateRange
};
