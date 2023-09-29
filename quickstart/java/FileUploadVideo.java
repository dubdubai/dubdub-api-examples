import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class FileUploadVideo {
    public static void main(String[] args) throws IOException {
        String uploadUri = "<uploadUri>";
        String filePath = "/Users/unmeshkumar/Downloads/beautiful.mp4";

        File file = new File(filePath);
        HttpURLConnection connection = (HttpURLConnection) new URL(uploadUri).openConnection();
        connection.setDoOutput(true);
        connection.setRequestMethod("PUT");
        connection.setRequestProperty("Content-Type", "video/mp4");
        connection.setRequestProperty("Content-Length", String.valueOf(file.length()));

        try (OutputStream os = connection.getOutputStream();
             FileInputStream fis = new FileInputStream(file)) {
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                os.write(buffer, 0, bytesRead);
            }
        }

        int responseCode = connection.getResponseCode();
        System.out.println("Response Code: " + responseCode);
        System.out.println("Response: " + connection.getResponseMessage());
    }
}