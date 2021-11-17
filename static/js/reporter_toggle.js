window['reporters_reporter_email'] = {
    get_data: () => {
        if ($('#integration_checkbox_reporter_email').prop('checked')) {
            const id = $('#selector_reporter_email .selectpicker').val()
            return {id,}
        }
    },
    set_data: data => {
        console.log('settings data for reporter_email', data)
        const { id, } = data
        $('#integration_checkbox_reporter_email').prop('checked', true)
        $('#selector_reporter_email .selectpicker').val(id).selectpicker('refresh')
        $('#selector_reporter_email').collapse('show')
    },
    clear_data: () => {
        const selector = $('#selector_reporter_email .selectpicker')
        selector[0]?.options.forEach(item =>
            $(item).attr('data-is_default') && $(selector[0]).val($(item).val()).selectpicker('refresh')
        )
        $('#integration_checkbox_reporter_email').prop('checked', false)
        $('#selector_reporter_email').collapse('hide')
    }
}
