import Text from "./Text";
import { TextInput, Pressable, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")} //touched.username = true
        style={{
          borderColor:
            formik.touched.username && formik.errors.username
              ? "red"
              : undefined,
        }}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red" }}>{formik.errors.username}</Text>
      )}

      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
        onBlur={formik.handleBlur("password")} //touched.password = true
        style={{
          borderColor:
            formik.touched.password && formik.errors.password
              ? "red"
              : undefined,
        }}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}

      <Pressable onPress={formik.handleSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
