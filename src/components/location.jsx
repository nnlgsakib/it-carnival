
const Location = () => {
  return (
    <div className=" mt-5 lg:mt-8">
      <div className="overflow-hidden h-[400px] pb-[30%] relative">
        <iframe
          className="w-full h-full rounded absolute top-0 left-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9272726395934!2d91.9804770748265!3d23.099758013444266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752e5f392c142c1%3A0x3d99e727c3514ab6!2sEdulife%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1708055172271!5m2!1sen!2sbd"
          width="300"
          height="500"
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
