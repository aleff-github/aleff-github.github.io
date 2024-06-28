---
layout: default
title: Please Encrypt
parent: Tips
permalink: /docs/Tips/Please-Encrypt
---

# Please Encrypt Your Emails

The important concept that anyone wanting to communicate should keep in mind is not so much saying, "What do I have to lose?" but rather asking themselves, "Am I willing to hypothetically let anyone access this information?" or "Am I okay with anyone accessing this content?" If the answer is yes, then go ahead and share the material without any encryption method. However, if you want to protect that content even a little, it would be wise to start using some basic protection system like encrypting emails with PGP.

Through this page, I don't want to emphasize further the importance of encryption, because if it’s not clear from the previous lines, it’s unlikely I could convince you. Therefore, from now on, there will be a practical guide on how to encrypt an email with my public key.

1. Download the [Kleopatra](https://www.openpgp.org/software/kleopatra/) software.

2. Open this link and copy the public key

   ```
   -----BEGIN PGP PUBLIC KEY BLOCK-----
   ...
   ...
   ...
   -----END PGP PUBLIC KEY BLOCK-----
   ```

3. Save the public key in a file with the ".asc" extension and double-click it or open it with Kleopatra. The certificate will be loaded.

4. Once the certificate is loaded, go to Notepad, write the message you want to encrypt, and click "Encrypt Notepad".

    ![](https://i.ibb.co/GxhWNgr/1.png)

5. Copy what is returned, paste it entirely into the body of the email, and send it.

    ![](https://i.ibb.co/rMjFX5Z/2.png)

    ![](https://i.ibb.co/3k9N9mV/3.png)