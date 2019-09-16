import { storiesOf, addDecorator } from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon'

import '../components/atoms/input'

const carMakes = `
<axa-input +label="Car make" +placeholder="Please select the make of your car">
<select id="CarBrand_CarBrandId" onchange=onBrandSelect()>
	<option value="101">ALFA ROMEO</option>
	<option value="169">ALPINA</option>
	<option value="728">Alpine</option>
	<option value="97">AUDI</option>
	<option value="140">AUSTIN</option>
	<option value="72">BMW</option>
	<option value="165">CHEVROLET</option>
	<option value="14">CHRYSLER</option>
	<option value="80">CITROEN</option>
	<option value="147">COLT</option>
	<option value="104">DACIA</option>
	<option value="31">DAEWOO</option>
	<option value="139">DAIHATSU</option>
	<option value="168">DAIMLER</option>
	<option value="78">DATSUN</option>
	<option value="34">DODGE</option>
	<option value="880">DS</option>
	<option value="11">FIAT</option>
	<option value="117">FORD</option>
	<option value="122">HONDA</option>
	<option value="141">HYUNDAI</option>
	<option value="98">INFINITI</option>
	<option value="107">ISUZU</option>
	<option value="52">JAGUAR</option>
	<option value="49">JEEP</option>
	<option value="930">JIAYUAN</option>
	<option value="125">KIA</option>
	<option value="105">LADA</option>
	<option value="159">LANCIA</option>
	<option value="33">LANDROVER</option>
	<option value="26">LEXUS</option>
	<option value="128">LOTUS</option>
	<option value="53">MAZDA</option>
	<option value="170">MCLAREN</option>
	<option value="166">MERCEDES</option>
	<option value="143">MG</option>
	<option value="171">MIA</option>
	<option value="161">MINI</option>
	<option value="6">MITSUBISHI</option>
	<option value="155">MORGAN</option>
	<option value="95">MORRIS</option>
	<option value="150">NISSAN</option>
	<option value="73">OPEL</option>
	<option value="71">PERODUA</option>
	<option value="48">PEUGEOT</option>
	<option value="146">PORSCHE</option>
	<option value="124">PROTON</option>
	<option value="130">RELIANT</option>
	<option value="132">RENAULT</option>
	<option value="135">ROVER</option>
	<option value="91">SAAB</option>
	<option value="32">SEAT</option>
	<option value="152">SKODA</option>
	<option value="62">SMART</option>
	<option value="45">SSANGYONG</option>
	<option value="24">SUBARU</option>
	<option value="20">SUZUKI</option>
	<option value="89">TALBOT</option>
	<option value="28">TESLA</option>
	<option value="40">TOYOTA</option>
	<option value="109">TRIUMPH</option>
	<option value="9">TVR</option>
	<option value="83">VAUXHALL</option>
	<option value="142">VOLKSWAGEN</option>
	<option value="123">VOLVO</option>
	<option value="112">YUGO/ZASTAVA</option>
	<option value="522">ZENOS</option>
</select>
<p slot=info>Selecting a brand will update the values of the model field.</p>

</axa-input>
`

let carModels = `
<option value=97883>1200</option>
<option value=97033>1300</option>
<option value=96829>1500</option>
<option value=97287>1600</option>
<option value=96795>NIVA</option>
<option value=98334>RIVA</option>
<option value=98248>SAMARA</option>
`

let carMakesModelsEmpty = `
<axa-input +label="Car Model" +placeholder="Please Select a Make first" id=CarModel_Container>
	<select id="CarModel_CarModelId">PLACEHOLDER
	</select>
	<p slot=info>This is empty until we manually fill it with the models (for the demo, the models are always the same).</p>
</axa-input>
`

const demo1 = `
<form class=m-form onsubmit="return onSubmit()">
${carMakes}

${carMakesModelsEmpty}

<div class=m-form__cta>
	<axa-button>Submit</axa-button>
</div>

</form>
`

storiesOf('Organism|Form', module)
	.addDecorator(withCode(demo1, 'html'))
	.add('Car maker-model dynamic example', () => {
		window.onSubmit = function() {
			alert(`Brand ID value : ${
				document.getElementById('CarBrand_CarBrandId').value
			}
						Model ID value : ${document.getElementById('CarModel_CarModelId').value}`)
			return false
		}

		window.onBrandSelect = function() {
			let el = document.getElementById('CarModel_Container')
			el.innerHTML = carMakesModelsEmpty.replace('PLACEHOLDER', carModels)
		}

		return demo1
	})
