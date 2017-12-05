import resource from './resource'

export function fetchMember(id) {
  return resource(`/member/${id}`)
}

export function fetchMembers(ids) {
  return Promise.all(ids.map(id => fetchMember(id)))
}

export function fetchMemberByEmail(email) {
  return resource(`/member?email=${email}`)
}

export function fetchMemberByName(email) {
  return resource(`/member?name=${name}`)
}

export function fetchMemberByUserName(username) {
  return resource(`/member?username=${username}`)
}