export const TEAM_SETDATA = 'TEAM_SETDATA'

//ACTION CREATORS
export function team_setData( teamData ){

  return {
		type: TEAM_SETDATA,
		teamData
	}
}