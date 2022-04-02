import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  aboutme: Yup.string().required("Zorunlu alan"),
});

const StepTwo = ({ nextStep }) => {
  const gonextStep = (form) => {
    nextStep(form);
  };

  return (
    <section className="p-8 lg:w-2/4 justify-center flex flex-col">
      <h3 className="text-3xl lg:text-4xl mb-2 lg:mb-6 font-bold">Adım 2</h3>
      <Formik
        initialValues={{
          aboutme: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          gonextStep(values);
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="form-item flex flex-col mb-4">
              <label className="text-xl lg:text-2xl font-bold my-8">
                Bize biraz kendinden bahseder misin?
              </label>
              <textarea
                onChange={handleChange}
                name="aboutme"
                placeholder="Birkaç cümle yeterli"
                className="border border-black w-full p-4 text-black font-bold h-40 resize-none"
              >{values.aboutme}</textarea>
            </div>
            {errors && <p className="my-6 text-center text-red-600">Formu doldurun...</p>}
            <button
              type="submit"
              className="bg-black w-full py-3 text-white font-bold"
            >
              Gönder
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default StepTwo;
