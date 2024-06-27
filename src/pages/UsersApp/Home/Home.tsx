import { useFormik } from "formik"
import { useAppDispatch } from "store/hooks"


import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"
import { v4 } from "uuid"
import { usersSliceActions } from "store/redux/users/usersSlice"

function Home() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      age: '',
      jobTitle: ''
    },
    onSubmit: (values, helpers) => {
      if (!!values.fullName && !!values.age && !!values.jobTitle) {
        dispatch(usersSliceActions.addUser({ ...values, id: v4() }))
        helpers.resetForm()
      } else {
        alert('please fill in all the fields')
      }
    }
  })


  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name="fullName"
          placeholder="Enter fullname"
          value={formik.values.fullName}
          label="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          name="age"
          placeholder="Enter age"
          value={formik.values.age}
          label="Age"
          onChange={formik.handleChange}
        />
        <Input
          name="jobTitle"
          placeholder="Enter job"
          value={formik.values.jobTitle}
          label="Job title"
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home
