import CropCard from '../components/CropCard'

const Crops = () => {
    const farmData = [
        {
            image: 'https://images.pexels.com/photos/45211/walnuts-nuts-healthy-shell-45211.jpeg',
            image2: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg',
            image3: 'https://images.pexels.com/photos/52521/pistachio-nuts-pistachios-crisps-52521.jpeg',
            name: 'Sunny Acres',
            location: 'California, USA',
            size: '150 acres',
            livestock: 'Cattle, Chickens',
            crops: 'Corn, Wheat',
            lastYield: {
                value: '2000 kg',
                date: '2023-09-15'
            },
            currentYield: {
                value: '2200 kg',
                date: '2023-10-10'
            }
        },
    ];
  return (
    <div>
      {farmData.map((farm, index) => (
                <CropCard 
                  key={index}
                  farmData={farm}
                />
              ))}
    </div>
  )
}

export default Crops