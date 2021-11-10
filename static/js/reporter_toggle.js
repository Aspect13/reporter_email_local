// window['scanners_qualys'] = {
//     get_data: () => {
//         if ($('#integration_checkbox_qualys').prop('checked')) {
//             const id = $('#selector_qualys .selectpicker').val()
//             const option_profile_id = $('#qualys_option_profile').val()
//             const report_template_id = $('#qualys_report_template').val()
//             const scanner_type = $('#qualys_scanner_type input:radio:checked').val()
//             // const scanner_types = [];
//             // $('#qualys_scanner_type_internal').prop('checked') && scanner_types.push('internal')
//             // $('#qualys_scanner_type_external').prop('checked') && scanner_types.push('external')
//
//             const scanner_pool = scanner_type === 'internal' ?
//                 $('.qualys_scanner_pool_item input').toArray().reduce((accumulator, currentValue) => {
//                     const value = $(currentValue).val()
//                     value && accumulator.push(value)
//                     return accumulator
//                 }, [])
//             : []
//
//             return {
//                 id,
//                 option_profile_id,
//                 report_template_id,
//                 scanner_type,
//                 scanner_pool
//             }
//         }
//     },
//     set_data: data => {
//         console.log('settings data for qualys', data)
//         const { id, option_profile_id, report_template_id, scanner_type, scanner_pool } = data
//         $('#integration_checkbox_qualys').prop('checked', true)
//         $('#selector_qualys .selectpicker').val(id).selectpicker('refresh')
//         $('#selector_qualys').collapse('show')
//         option_profile_id && $('#qualys_option_profile').val(option_profile_id)
//         report_template_id && $('#qualys_report_template').val(report_template_id)
//         scanner_type && $(`#qualys_scanner_type_${scanner_type}`).prop('checked', true)
//         scanner_pool?.forEach(item => addPool(null, item))
//     },
//     clear_data: () => {
//         const selector = $('#selector_qualys .selectpicker')
//         selector[0]?.options.forEach(item =>
//             $(item).attr('data-is_default') && $(selector[0]).val($(item).val()).selectpicker('refresh')
//         )
//         $('#integration_checkbox_qualys').prop('checked', false)
//         $('#selector_qualys').collapse('hide')
//         $('#settings_qualys').collapse('hide')
//
//         $('#qualys_option_profile').val('')
//         $('#qualys_report_template').val('')
//         $('#qualys_scanner_type input:radio').prop('checked', false)
//         $('.qualys_scanner_pool_item').remove()
//     }
// }
//
// const addPool = (event, value='') => {
//     const row = `
//         <div class="row d-flex align-items-center qualys_scanner_pool_item">
//             <div class="flex-grow-1">
//                 <input type="text" class="form-control form-control-alternative" placeholder="Key" value="${value}">
//             </div>
//             <button class="btn btn-primary btn-37" id="qualys_scanner_pool_minus" onclick="removePool(this)"><span class="fa fa-minus"></span></button>
//         </div>
//     `
//     $('#qualys_scanner_pool').append(row)
// }
//
// const removePool = el => $(el).closest('.qualys_scanner_pool_item').remove()
//
//
// $(document).ready(function () {
//     $('#qualys_scanner_pool_plus').on('click', addPool)
//     $('#qualys_scanner_type input').on('change', event => {
//         if (event.target.value === 'internal' && event.target.checked) {
//             $('#qualys_scanner_pool').collapse('show')
//         } else {
//             $('#qualys_scanner_pool').collapse('hide')
//         }
//     })
// })