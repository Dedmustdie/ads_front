<?php ?>
<script src="../scripts/components/header_include.js"></script>
<section class="your_invetnory">
    <div class="row justify-content-center">
        <div class="col-4">
            <div class="container overflow-hidden">
                <div id="main-div" class="row gy-5">
                    <div class="container mt-5" id="centerLayer">
                        <h2>Создать объявление:</h2>
<!--                        <form id="create-form" method="POST" enctype="multipart/form-data" action="/download">-->
<!--                            <p>Укажите заголовок объявления: <label for="create-title"></label><input id="create-title"-->
<!--                                                                                                      type="text"-->
<!--                                                                                                      name="title"/></p>-->
<!--                            <p>Укажите текст объявления: <label for="create-text"></label><input id="create-text"-->
<!--                                                                                                 type="text"-->
<!--                                                                                                 name="text"/></p>-->
<!--                            <p>Укажите цену: <label for="create-price"></label><input id="create-price" type="text"-->
<!--                                                                                      name="price"/></p>-->
<!--                            <p>Загрузите изображения: <input id="create-images" type="file" name="file"/>-->
<!--                            </p>-->
<!--                            <input type="submit" value="Создать">-->
<!--                        </form>-->
                        <form method="POST" action="/download" enctype="multipart/form-data">
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
<script type="module" src="../scripts/create.js"></script>
<script type="module" src="../scripts/header_buttons.js"></script>
</body>
</html>
