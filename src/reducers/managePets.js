export let state;


export const managePets = (state = {pets: []}, action) => {
  switch(action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}

    case 'REMOVE_PET':
      return {...state, pets: state.pets.filter(pet => {
          return pet.id !== action.id
        })
      }

    default:
      return state;
  }
}

export const dispatch = (action) => {
  state = managePets(state, action);
  render()
}

export const render= () => {
  let container = document.querySelector("#container");
  let petList = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  });
  container.innerHTML = `<ul>${petList.join(' ')}</ul>`
}
