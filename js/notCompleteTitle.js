export function notCompleteTitle() {
    const notComplete = document.querySelectorAll('.not-complete')
    notComplete.forEach(ele => {
        ele.title = 'هذه الخاصية تحت الإنشاء'
    });
}