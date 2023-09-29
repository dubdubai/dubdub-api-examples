import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class SaveAudioToFile {
    public static void main(String[] args) {
        String url = "https://api.dubdub.ai/v1/dubbing/download_content/<content_id>?target_language=hi-IN&output_file=mix_audio"; // Replace with your URL
        String outputPath = "dubbed_output_of_vocab.wav"; // Replace with your desired file path

        try {
            URL urlObj = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) urlObj.openConnection();

            // Set up the connection
            connection.setRequestMethod("GET");
            connection.setRequestProperty("api_key", "<api_key>");

            int responseCode = connection.getResponseCode();

            if (responseCode == HttpURLConnection.HTTP_OK) {
                // Get the input stream from the connection
                InputStream inputStream = connection.getInputStream();

                // Create a FileOutputStream to write the response content to a file
                FileOutputStream outputStream = new FileOutputStream(outputPath);

                // Read and write the content in chunks
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }

                // Close the streams
                inputStream.close();
                outputStream.close();

                System.out.println("File saved successfully to: " + outputPath);
            } else {
                System.out.println("HTTP GET request failed with response code: " + responseCode);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}