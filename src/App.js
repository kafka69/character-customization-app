import logo from './logo.svg';
import './App.css';
import Avatar from './component/Avatar';
import { PartList } from './component/PartList';
import {React,useState} from 'react'

function App() {

  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  const [body, setBody] = useState(1)
  const [eyes, setEyes] = useState(1)
  const [hair, setHair] = useState(1)
  const [clothing1, setClothing1] = useState(1)
  const [clothing2, setClothing2] = useState(1)
  const [clothing3, setClothing3] = useState(1)
  const [mouth, setMouth] = useState(1)
  const [eyebrows, setEyebrows] = useState(1)
  const [glasses, setGlasses] = useState(1)


  const getRandomInt = (max)=> {
	return Math.floor(Math.random() * max);
  }
  const randomized = ()=>{
	// body
	const body = getRandomInt(total.body)
	// eyes
	const eyes =  getRandomInt(total.eyes)
	const hair = getRandomInt(total.hair)
	const clothing1 = getRandomInt(total.clothing1)
	const clothing2 = getRandomInt(total.clothing2)
	const clothing3 = getRandomInt(total.clothing3)
	const mouth = getRandomInt(total.mouth)
	const eyebrow = getRandomInt(total.eyebrows)
	const glasses = getRandomInt(total.glasses)
	// set
	setBody(body)
	setEyes(eyes)
	setHair(hair)
	setClothing1(clothing1)
	setClothing2(clothing2)
	setClothing3(clothing3)
	setMouth(mouth)
	setEyebrows(eyebrow)
	setGlasses(glasses)
  }

  return (
    <div className="App">
     <div className="title">CHARACTER</div>
			<div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
			<div className="divider"></div>
			<div className="avatar-group gap-30">
				<div>
					<div className="avatar-wrapper">
						<Avatar body={body} eyes={eyes} hair={hair} clothing1={clothing1} clothing2={clothing2} clothing3={clothing3} mouth={mouth} eyebrow={eyebrows} glasses={glasses} />
						<div className="text-center">
							<button onClick={randomized} className="button">
								Randomize!
							</button>
						</div>
					</div>
				</div>
				<div>
					<div className="list-section">
						<h2>Body</h2>
						<PartList total={total.body} path="body" set={setBody}/>
					</div>
					<div className="list-section">
						<h2>Eyes</h2>
						<PartList total={total.eyes} path="eyes"zoom={2.5} top="35px" set={setEyes}/>
					</div>
					<div className="list-section">
						<h2>Hair</h2>
						<PartList total={total.hair} path="hair" set={setHair}/>
					</div>
					<div className="list-section">
						<h2>Mouth</h2>
						<PartList total={total.mouth} path="mouths"zoom={2} set={setMouth}/>
					</div>
					<div className="list-section">
						<h2>Eyebrows</h2>
						<PartList total={total.eyebrows} path="eyebrows" set={setEyebrows} />
					</div>
					<div className="list-section">
						<h2>Glasses</h2>
						<PartList total={total.glasses} path="accessories/glasses"set={setGlasses}/>
					</div>
					<div className="list-section">
						<h2>Clothing (L1)</h2>
						<PartList total={total.clothing1} path="clothes/layer_1" set={setClothing1}  />
					</div>
					<div className="list-section">
						<h2>Clothing (L2)</h2>
						<PartList total={total.clothing2} path="clothes/layer_2"set={setClothing2}/>
					</div>
					<div className="list-section">
						<h2>Clothing (L3)</h2>
						<PartList total={total.clothing3} path="clothes/layer_3" zoom={2} top="-15px" set={setClothing3}/>
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
