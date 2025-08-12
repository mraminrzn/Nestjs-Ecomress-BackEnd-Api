export function generateHtmlVerify(token: string) {
  return `
     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif;">
  <div style="background-color: #f6f6f6; padding: 20px 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; padding: 20px 0; border-bottom: 1px solid #eeeeee;">
        <img src="https://tilix.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ef1a36bf.png&w=128&q=75" alt="tilix Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto;">
      </div>

      <div style="padding: 20px 40px;">
        <h1 style="color: #333333; font-size: 24px; text-align: center; margin-top: 20px; font-weight: bold;">Verify Your Email Address</h1>
        <p style="font-size: 16px; color: #555555; line-height: 1.6;">Hello ,</p>
        <p style="font-size: 16px; color: #555555; line-height: 1.6;">Thanks for signing up for an account with tilit Please click the button below to verify your email address and activate your account.</p>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px; margin-bottom: 30px;">
          <tr>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" bgcolor="#007bff" style="border-radius: 5px;">
                    <a href="${process.env.API_PATH}/auth/verifyEmail?token=${token}" target="_blank" style="font-size: 16px; font-weight: bold; color: #ffffff; text-decoration: none; border-radius: 5px; padding: 12px 25px; display: inline-block;">Verify Email Address</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <p style="text-align: center; font-size: 14px; color: #777777;">This link is valid for **1 hour**.</p>
        
        <p style="font-size: 14px; color: #777777; line-height: 1.5; margin-top: 20px;">If the button above doesn't work, you can copy and paste the following URL into your web browser:</p>
        <p style="font-size: 14px; color: #007bff; word-break: break-all; margin-top: 10px;">tilix</p>

      </div>

      <div style="border-top: 1px solid #eeeeee; padding: 20px 40px; text-align: center;">
        <p style="font-size: 12px; color: #aaaaaa; line-height: 1.5;">
          ©2025 tilix  All rights reserved.<br>
          tilix.ir<br>
          <a href="[Link to Support Page]" style="color: #aaaaaa; text-decoration: none;">Support</a> | <a href="[Link to Privacy Policy]" style="color: #aaaaaa; text-decoration: none;">Privacy Policy</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;
}
