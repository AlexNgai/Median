export const PATIENT_SETDATA = 'PATIENT_SETDATA'

//ACTION CREATORS
export function patient_setData( patientData ){

  return {
		type: PATIENT_SETDATA,
		patientData
	}
}
