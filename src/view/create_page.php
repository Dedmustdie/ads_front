<?php ?>
<script src="../scripts/header.js"></script>
<section class="your_invetnory">
    <div class="row justify-content-center">
        <div class="col-4">
            <div class="container overflow-hidden">
                <div id="main-div" class="row gy-5">
                    <div class="container mt-5" id="centerLayer">
                        <h2>Создать объявление:</h2>
                        <form method="POST" enctype="multipart/form-data">
                            <p>Укажите заголовок объявления: <label for="create-title"></label><input id="create-title"
                                                                                                      type="text"
                                                                                                      name="title"/></p>
                            <p>Укажите текст объявления: <label for="create-text"></label><input id="create-text"
                                                                                                 type="text"
                                                                                                 name="text"/></p>
                            <p>Укажите цену: <label for="create-price"></label><input id="create-price" type="text"
                                                                                      name="price"/></p>
                            <p>Загрузите изображения: <input id="create-images" type="file" name="files[]" required multiple></p>
                            <input type="submit" value="Создать">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script type="module" src="../scripts/create_page.js"></script>
</body>
</html>
