import React, { useContext, useState, useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  ScaleFade,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import CardContext from "../context/cardContext";
import Complete from "./Complete";

const Form = () => {
  const { updateDetail } = useContext(CardContext);
  const [load, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    control,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmit(!submit);
      updateDetail(data);
    }, 3000);
  };

  const hanleronclick = () => {
    updateDetail({ cardNumber: 0, cvc: "", mm: 0, name: "", yy: "" });
    setSubmit(!submit);
  };

  const withMMValueCap = (inputObj) => {
    const MAX_VAL = 12;
    const { value } = inputObj;
    return value <= MAX_VAL ? true : false;
  };

  const withYYValueCap = (inputObj) => {
    const MAX_VAL = 99;
    const { value } = inputObj;
    return value <= MAX_VAL ? true : false;
  };

  useEffect(() => {
    reset({ cardNumber: "", mm: "", yy: "", cvc: "", name: "" });

    return reset({});
  }, [isSubmitSuccessful]);

  return (
    <>
      <Box
        w={{ base: "340px", xl: "sizes.box.form" }}
        ml={{ base: "0", xl: "10%" }}
        pb={{base:'4'}}
        
      >
        {!submit && (
          <ScaleFade initialScale={0.8} in={!submit}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <Box>
                  <FormLabel
                    color={"brand.neutral.verydarkviolet"}
                    fontSize={"xs"}
                    fontWeight={"medium"}
                    letterSpacing={"widest"}
                    textTransform={"uppercase"}
                  >
                    Cardholder Name
                  </FormLabel>
                  <Input
                    focusBorderColor={"brand.neutral.verydarkviolet"}
                    type="text"
                    fontSize={"lg"}
                    placeholder="e.g. Jane Appleseed"
                    size="lg"
                    {...register("name", {
                      required: true,
                      pattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
                    })}
                    maxLength={25}
                    isInvalid={
                      errors.name?.type === "pattern" ||
                      errors.name?.type === "required"
                        ? true
                        : false
                    }
                  />
                  <FormHelperText
                    fontSize={"xs"}
                    color={"brand.primary.red"}
                    letterSpacing={"tighter"}
                  >
                    {errors.name?.type === "required" && "Can't be blank"}
                    {errors.name?.type === "pattern" &&
                      "need lastname e.g. Jane Appleseed"}
                  </FormHelperText>
                </Box>
                <Box mt={"6"}>
                  <FormLabel
                    color={"brand.neutral.verydarkviolet"}
                    fontSize={"xs"}
                    fontWeight={"medium"}
                    letterSpacing={"widest"}
                    textTransform={"uppercase"}
                  >
                    Card Number
                  </FormLabel>
                  <Controller
                    render={({ field }) => (
                      <NumberFormat
                        customInput={Input}
                        type="text"
                        fontSize={"lg"}
                        focusBorderColor={"brand.neutral.verydarkviolet"}
                        placeholder="e.g. 1234 5678 9123 0000"
                        size="lg"
                        format="#### #### #### ####"
                        {...field}
                        mask={""}
                        isInvalid={
                          errors.cardNumber?.type === "required" ||
                          errors.cardNumber?.type === "minLength"
                            ? true
                            : false
                        }
                      />
                    )}
                    rules={{
                      required: { value: true, message: "Can't be blank" },
                      minLength: { value: 19, message: "Can't be blank" },
                    }}
                    name="cardNumber"
                    control={control}
                  />
                  <FormHelperText
                    fontSize={"xs"}
                    color={"brand.primary.red"}
                    letterSpacing={"tighter"}
                  >
                    {errors.cardNumber?.type === "required" &&
                      errors.cardNumber.message}
                    {errors.cardNumber?.type === "minLength" &&
                      errors.cardNumber.message}
                  </FormHelperText>
                </Box>
                <Flex
                  mt={"6"}
                  gap={{ base: "4", xl: "0" }}
                  justifyContent={"space-between"}
                >
                  <Box w={"170px"}>
                    <FormLabel
                      color={"brand.neutral.verydarkviolet"}
                      fontSize={"xs"}
                      fontWeight={"medium"}
                      letterSpacing={"widest"}
                      textTransform={"uppercase"}
                    >
                      Exp. Date (MM/YY)
                    </FormLabel>
                    <Flex gap={"10px"}>
                      <Controller
                        render={({ field }) => (
                          <NumberFormat
                            customInput={Input}
                            {...field}
                            type="text"
                            fontSize={"lg"}
                            focusBorderColor={"brand.neutral.verydarkviolet"}
                            placeholder="MM"
                            maxLength={"2"}
                            size="lg"
                            isInvalid={
                              errors.mm?.type === "required" ||
                              errors.mm?.type === "min"
                                ? true
                                : false
                            }
                            isAllowed={withMMValueCap}
                          />
                        )}
                        rules={{
                          required: { value: true, message: "Can't be blank" },
                          min: { value: 1, message: "Can't be blank" },
                        }}
                        name="mm"
                        control={control}
                      />
                      <Controller
                        render={({ field }) => (
                          <NumberFormat
                            customInput={Input}
                            {...field}
                            type="text"
                            fontSize={"lg"}
                            focusBorderColor={"brand.neutral.verydarkviolet"}
                            placeholder="YY"
                            maxLength={"2"}
                            size="lg"
                            isInvalid={
                              errors.yy?.type === "required" ||
                              errors.yy?.type === "min"
                                ? true
                                : false
                            }
                            isAllowed={withYYValueCap}
                          />
                        )}
                        rules={{
                          required: { value: true, message: "Can't be blank" },
                          min: { value: 1, message: "Can't be blank" },
                        }}
                        name="yy"
                        control={control}
                      />
                    </Flex>
                    <FormHelperText
                      fontSize={"xs"}
                      color={"brand.primary.red"}
                      letterSpacing={"tighter"}
                    >
                      {errors.mm?.type !== "required" &&
                        errors.yy?.type === "required" &&
                        errors.yy.message}
                      {errors.mm?.type == "required" &&
                        errors.yy?.type !== "required" &&
                        errors.mm.message}
                      {errors.mm?.type === "required" &&
                        errors.yy?.type === "required" &&
                        errors.mm.message}

                      {errors.mm?.type !== "min" &&
                        errors.yy?.type === "min" &&
                        errors.yy.message}

                      {errors.mm?.type == "min" &&
                        errors.yy?.type !== "min" &&
                        errors.mm.message}

                      {errors.mm?.type === "min" &&
                        errors.yy?.type === "min" &&
                        errors.mm.message}
                    </FormHelperText>
                  </Box>
                  <Box w={"189px"}>
                    <FormLabel
                      color={"brand.neutral.verydarkviolet"}
                      fontSize={"xs"}
                      fontWeight={"medium"}
                      letterSpacing={"widest"}
                      textTransform={"uppercase"}
                    >
                      CVC
                    </FormLabel>
                    <Controller
                      render={({ field }) => (
                        <NumberFormat
                          customInput={Input}
                          type="text"
                          fontSize={"lg"}
                          focusBorderColor={"brand.neutral.verydarkviolet"}
                          placeholder="e.g. 123"
                          size="lg"
                          format={"###"}
                          mask=""
                          {...field}
                          isInvalid={
                            errors.cvc?.type === "required" ||
                            errors.cvc?.type === "minLength"
                              ? true
                              : false
                          }
                        />
                      )}
                      name="cvc"
                      control={control}
                      rules={{
                        required: { value: true, message: "Can't be blank" },
                        minLength: { value: 3, message: "Can't be blank" },
                      }}
                    />

                    <FormHelperText
                      fontSize={"xs"}
                      color={"brand.primary.red"}
                      letterSpacing={"tighter"}
                    >
                      {(errors.cvc?.type === "required" ||
                        errors.cvc?.type === "minLength") &&
                        errors.cvc.message}
                    </FormHelperText>
                  </Box>
                </Flex>
                <Box mt={"6"} w={"full"}>
                  <Button
                    color={"brand.neutral.white"}
                    fontSize={"lg"}
                    bgColor={"brand.neutral.verydarkviolet"}
                    w={"full"}
                    size="lg"
                    borderRadius={"xl"}
                    _hover={{ bg: "brand.neutral.darkgrayishviolet" }}
                    _active={{ bg: "brand.neutral.verydarkviolet" }}
                    type={"submit"}
                    isLoading={load}
                  >
                    Confirm
                  </Button>
                </Box>
              </FormControl>
            </form>
          </ScaleFade>
        )}

        {submit && (
          <ScaleFade initialScale={0.7} in={submit}>
            <Complete hanleronclick={hanleronclick} />
          </ScaleFade>
        )}
      </Box>
    </>
  );
};

export default Form;
