export let state;


export function managePets(state = { pets: [] }, action){
  switch(action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pet] }
    case "REMOVE_PET":
      return { pets: state.pets.filter(pet => pet.id !== action.id) }
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const containerEl = document.getElementById('container')

  containerEl.innerHTML = ""
  const petListEl = document.createElement("UL")
  containerEl.appendChild(petListEl)
  for ( let pet of state.pets ) {
    const petLiEl = document.createElement("LI")
    petLiEl.innerHTML = pet.name
    petListEl.appendChild(petLiEl)
  }
}
