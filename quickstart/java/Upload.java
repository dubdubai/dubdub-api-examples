import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class Upload {
    public static void main(String[] args) throws IOException {
        String uploadUri = "<uploadUri>"; // replace with the uri that was received while creating content
        String filePath = "<filepath>"; // replace with the path of the file to be uploaded

        File file = new File(filePath);
        HttpURLConnection connection = (HttpURLConnection) new URL(uploadUri).openConnection();
        connection.setDoOutput(true);
        connection.setRequestMethod("PUT");

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