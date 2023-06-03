
const SelectTalle = ({setTalle}) =>{


const selectTalle = (e) => {
    setTalle(e.target.value)
  }

return(<div><select  onChange={selectTalle}>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="41">43</option>
          <option value="42">44</option>
          </select></div>)




}

export default SelectTalle