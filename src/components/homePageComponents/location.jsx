
const Location = () => {
  return (
    <div className=" mt-5 lg:mt-8">
      <div className="overflow-hidden h-[500px] pb-[30%] relative">
        <iframe
          className="w-full h-full rounded absolute top-0 left-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.682978960214!2d91.98214557482682!3d23.108698213109534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752e58b39e80a17%3A0xda3ed453a07b9050!2sKhagrachari%20Town%20Hall!5e0!3m2!1sen!2sbd!4v1708239525102!5m2!1sen!2sbd"
          width="300"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;

