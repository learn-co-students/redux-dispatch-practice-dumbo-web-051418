export let state;
export let action;


export function managePets(state = { pets: [] }, action = { type: '@@INIT'}){
  switch (action.type) {
    case "ADD_PET":
      return( { ...state, pets: [...state.pets, action.pet]} )
      break;
    case "REMOVE_PET":
      return({...state, pets: state.pets.filter(pet => pet.id !== action.id)})
      break;
    default:
      return state;

  }
}

export function dispatch(){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
