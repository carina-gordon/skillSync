import { useChat } from "ai/react";

export default function ConvertStringToJson(str: string) {

    console.log('Attempting to parse JSON string', str);
    try {

      const jsonObject = JSON.parse(str);
      console.log('Successfully parsed JSON string', jsonObject);
      return jsonObject;

    } catch (error) {

      console.error('Error parsing JSON string, retrying', error);

      return null;
    }
  }